import os
import json

def generate_remark(student_data: dict) -> str:
    # TODO: Add actual LLM call here using groq
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        return "API Key missing"
    
    marks = student_data.get("marks", [])
    if not marks:
        return "Insufficient data to generate remark."
        
    prompt = f"Analyze these marks: {json.dumps(marks)}"
    # mock response
    return f"Remark based on {len(marks)} subjects."

def process_query(query: str):
    # Need to setup pgvector first
    return "Vector DB not initialized yet"