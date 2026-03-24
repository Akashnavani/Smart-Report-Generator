# Experimental AI integration
def generate_remark(student_data: dict) -> str:
    print("Generating remark for", student_data.get("usn"))
    # Hardcoded for now while figuring out Groq API
    return "The student is doing well but needs to focus on attendance."

def init_rag():
    pass