# Valorant Piano MIDI
 
**Program by Adam. ©2023. <br>**
Contact: https://wrecknofear.github.io/contact <br>
Allowed for modification or redistribution for personal/educational use only and credit must be given.

```
Libraries used: Pyautogui, Flask, Web MIDI API
Languages used: Javascript, HTML, CSS, Python
```

# Key points

* This program was designed specifically to play Valorant on a piano using only the piano keys, pedals and buttons binded to keys on a gaming mouse.
* Computer keys correspond with keys and pedals in a layout optimised for Valorant.
* Computer keys (X, TAB, G, C, M) were binded to the additional side buttons on the Logitech G503 Hero mouse.
* There is no run file for this program, so run it using a code editor or terminal/command prompt window as explained below

# Run the program [Method 1 - Built-in terminal/command prompt]
**Ensure that the latest version of `Python 3` is installed and a MIDI piano is connected via a MIDI to USB adapter.**

**1.** Download all files from GitHub in ZIP file format
<img width="402" alt="Screenshot 2023-03-11 at 2 38 42 pm" src="https://user-images.githubusercontent.com/69378029/224462972-4b2ca7d9-8233-4c4e-8271-51ff684580a4.png">

**2.** Unzip the downloaded file

**3.** Open a `Terminal` window (Mac) or `Command Prompt` window (Windows) <br>
<img width="570" alt="Screenshot 2023-03-11 at 3 52 02 pm" src="https://user-images.githubusercontent.com/69378029/224465644-26c5a23c-9b84-410a-96a7-4e499ef69dfa.png">

**4.** Navigate to the appropriate file using the directory command, `cd`<br>
<img width="571" alt="Screenshot 2023-03-11 at 3 48 38 pm" src="https://user-images.githubusercontent.com/69378029/224465504-49a88c88-1d35-4b5b-9b26-fec44300bdce.png">

**5.** Type `py server.py` into the terminal window and press `ENTER`
<img width="568" alt="Screenshot 2023-03-11 at 3 50 18 pm" src="https://user-images.githubusercontent.com/69378029/224465558-95f3b494-60d4-4466-ba6c-26f25cf4d625.png">

**6.** Visit `http://localhost:5000` in a web browser to view the webpage input interface <br>

**7.** *(OPTIONAL)* All incoming and outgoing key presses are logged in the webpage's console. To view this log, open the webpage console using the appropriate shortcut: <br>
MAC shortcut: `COMMAND+OPTION+J` <br>
WINDOWS shortcut: `CONTROL+SHIFT+J`

# Run the program [Method 2 - Code editor terminal]
**Ensure that the latest version of `Python 3` is installed and a MIDI piano is connected via a MIDI to USB adapter.**

**1.** Download all files from GitHub in ZIP file format
<img width="402" alt="Screenshot 2023-03-11 at 2 38 42 pm" src="https://user-images.githubusercontent.com/69378029/224462972-4b2ca7d9-8233-4c4e-8271-51ff684580a4.png">

**2.** Unzip the downloaded file

**3.** Open the unzipped folder in Visual Studio Code <br>
<img width="262" alt="Screenshot 2023-03-11 at 2 41 19 pm" src="https://user-images.githubusercontent.com/69378029/224463081-48f26e5b-a200-422e-8ac4-c6112221f005.png">

**4.** Open a new Terminal within Visual Studio Code <br>
<img width="202" alt="Screenshot 2023-03-11 at 2 30 28 pm" src="https://user-images.githubusercontent.com/69378029/224462665-0b01ee7c-1e13-4226-81ed-e43b00d169de.png">

**5.** Type `py server.py` into the terminal window and press `ENTER`
<img width="1181" alt="Screenshot 2023-03-11 at 2 43 07 pm" src="https://user-images.githubusercontent.com/69378029/224463206-128859e2-34d9-4402-a7b4-d40639362398.png">

**6.** Visit `http://localhost:5000` in a web browser to view the webpage input interface <br>

**7.** *(OPTIONAL)* All incoming and outgoing key presses are logged in the webpage's console. To view this log, open the webpage console using the appropriate shortcut: <br>
MAC shortcut: `COMMAND+OPTION+J` <br>
WINDOWS shortcut: `CONTROL+SHIFT+J`
