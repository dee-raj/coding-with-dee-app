from flask import Flask
app = Flask("Testing server")

@app.route('/', methods=['GET'])
def say_hey():
   return 'Hey, There!'

if __name__ == "__main__":
   app.run(debug=True, port=2321)