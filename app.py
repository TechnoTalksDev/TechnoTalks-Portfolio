from flask import Flask, redirect
import os

app = Flask('app')

@app.route('/')
def hello_world():
  return redirect("https://www.technotalks.net/", 301)

if __name__ == "__main__":
    os.environ["FLASK_ENV"] = "development"
    app.run(host="0.0.0.0", port=80, debug=True)
