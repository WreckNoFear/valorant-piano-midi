# To start:
# py server.py

import json
import pyautogui
from flask import Flask, render_template, request, jsonify
# import keyboard

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/presskey', methods=['POST'])
def pressKey():
    output = request.get_json()
    key = json.loads(output)
    print(key['key'])

    if key['down'] == True:
        pyautogui.keyDown(key['key'])
    elif key['down'] == False:
        pyautogui.keyUp(key['key'])
    else:
        return key
    return key


'''
@app.route('/mousedata')
def mouseEvents():
    def onkeydown(event):
        eventHistory = {
            'key': event.name,
            'down': True
        }
        print(eventHistory)
        with app.app_context():
            return jsonify(eventHistory)

    def onkeyup(event):
        eventHistory = {
            'key': event.name,
            'down': False
        }
        print(eventHistory)
        with app.app_context():
            return jsonify(eventHistory)

    keyboard.on_press(onkeydown)
    keyboard.on_release(onkeyup)

    keyboard.wait()
'''

if __name__ == "__main__":
    app.run(debug=True)
