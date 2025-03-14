from clickhouse_driver import Client

client = Client(host='clickhouse-server')

def get_analytics():
    return client.execute('SELECT COUNT(*) FROM events')
