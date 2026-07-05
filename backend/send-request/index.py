import json
import os
import smtplib
import re
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    '''Принимает заявку с сайта (имя, телефон, комментарий) и отправляет письмо на почту владельца бизнеса.
    Args: event - dict с httpMethod, body (JSON: name, phone, message); context - объект с request_id
    Returns: HTTP response dict с результатом отправки
    '''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body_data = json.loads(event.get('body', '{}'))
    name = str(body_data.get('name', '')).strip()
    phone = str(body_data.get('phone', '')).strip()
    message = str(body_data.get('message', '')).strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Укажите имя и телефон'})
        }

    phone_digits = re.sub(r'[^\d+]', '', phone)
    if len(phone_digits) < 10:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Некорректный номер телефона'})
        }

    gmail_address = os.environ['GMAIL_ADDRESS']
    gmail_password = os.environ['GMAIL_APP_PASSWORD']
    recipient = 'yusuf2013.04.02@gmail.com'

    msg = MIMEMultipart()
    msg['From'] = gmail_address
    msg['To'] = recipient
    msg['Subject'] = f'Новая заявка с сайта ISMAGSTROY от {name}'

    body_text = f'''Новая заявка с сайта ISMAGSTROY

Имя: {name}
Телефон: {phone}
Комментарий: {message if message else "—"}
'''
    msg.attach(MIMEText(body_text, 'plain', 'utf-8'))

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(gmail_address, gmail_password)
        server.send_message(msg)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
    }
