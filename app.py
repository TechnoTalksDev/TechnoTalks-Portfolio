from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def coming_soon(): 
    return render_template("coming_soon.html")

@app.route("/dev/")
def index(): 
    return render_template("index.html")

@app.errorhandler(404)
def not_found(e):
    return "<h1>Page not found</h1>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)