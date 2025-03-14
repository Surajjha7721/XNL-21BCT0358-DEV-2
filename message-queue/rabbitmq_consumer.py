import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.queue_declare(queue='task_queue')
channel.basic_consume(queue='task_queue', on_message_callback=lambda ch, method, properties, body: print(body))

channel.start_consuming()
