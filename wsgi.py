from app import app
import os

if __name__ == "__main__":
    os.environ["FLASK_ENV"] = "production"
    app.run(debug=False)