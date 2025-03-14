from minio import Minio

client = Minio(
    "localhost:9000",
    access_key="minioadmin",
    secret_key="minioadmin",
    secure=False
)

def upload_file(bucket_name, file_path, object_name):
    client.fput_object(bucket_name, object_name, file_path)
