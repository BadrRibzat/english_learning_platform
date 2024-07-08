# backend/utils/error_logging.py

import logging
from rest_framework.response import Response

logger = logging.getLogger(__name__)

def log_error(error, context=None):
    """
    Log an error with optional context information.
    """
    error_message = str(error)
    if context:
        error_message += f" Context: {context}"
    logger.error(error_message)

def handle_exception(exc, view=None):
    """
    Handle exceptions and return appropriate error responses.
    
    Args:
        exc (Exception): The exception object to be handled.
        view (ViewSet, optional): The view where the exception occurred.
    
    Returns:
        tuple: A tuple containing the error response and status code.
    """
    log_error(exc)
    if isinstance(exc, ValueError):
        return {"error": "Invalid input provided."}, 400
    elif isinstance(exc, PermissionError):
        return {"error": "You do not have permission to perform this action."}, 403
    else:
        return {"error": "An unexpected error occurred. Please try again later."}, 500

# Example usage in a view
from rest_framework import viewsets

class SomeViewSet(viewsets.ModelViewSet):
    def create(self, request):
        try:
            # Your logic here
            pass
        except Exception as e:
            return Response(*handle_exception(e, self))

