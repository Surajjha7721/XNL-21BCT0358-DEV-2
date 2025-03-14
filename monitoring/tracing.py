from opentelemetry import trace

tracer = trace.get_tracer(__name__)

with tracer.start_as_current_span("user-login"):
    print("Tracing User Login Request")
