<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [silent-SOS] 🎯

## Basic Details

### Team Name: [ProgramHER]

### Team Members
- Member 1: [Hazna.S] - [SCMS School of engineering and technology]
- Member 2: [Haripriya Harish] - [SCMS School of engineering and technology]

### Hosted Project Link
[https://silent-sos-one.vercel.app/]

### Project Description
[Silent SOS Calculator is a disguised safety web app that looks like a normal calculator but secretly sends an emergency SOS alert with user location when a hidden button is pressed. It helps users quickly alert trusted contacts during unsafe situations without drawing attention.]

### The Problem statement
[Many people cannot openly ask for help during emergencies. Traditional panic buttons are obvious and may increase risk if noticed by a threat.]

### The Solution
[We created a calculator interface that secretly triggers an SOS alert. When a hidden button is pressed, it sends an email containing the user’s name, location, time, and emergency message.]

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: [HTML, CSS, JavaScript]
- Frameworks used: [None]
- Libraries used: [EmailJS API, Browser Geolocation API]
- Tools used: [VS Code, GitHub, Vercel]

**For Hardware:**
- Main components: [Not applicable (Software-only project)]
- Specifications: [Not applicable (Software-only project)]
- Tools required: [Not applicable (Software-only project)]

---

## Features

List the key features of your project:
- Feature 1: [Disguised Calculator Interface]
- Feature 2: [Hidden SOS Trigger Button]
- Feature 3: [Real-Time Location Tracking]
- Feature 4: [Automatic Emergency Email Alerts]

---

## Implementation

### For Software:

#### Installation
```bash
[git clone https://github.com/Hazna-07/silent-sos.git
cd silent-sos
]
```

#### Run
```bash
[open website.html]
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1]("C:\Users\hrish\OneDrive\Pictures\Screenshots\sossent.png")
*Calculator interface disguised as a normal app*

![Screenshot2](""C:\Users\hrish\OneDrive\Pictures\Screenshots\email.png"")
*hidden sos activation button

![Screenshot3]("C:\Users\hrish\OneDrive\Pictures\Screenshots\sostrigger.png")
Emergency alert email with user details

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*User presses hidden button → Browser gets location → EmailJS sends emergency alert*

**Application Workflow:**

![Workflow](docs/workflow.png)
*User opens calculator → presses secret trigger → location captured → email sent*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** https://silent-sos-one.vercel.app`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** []
- 
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [Chatgpt]

**Purpose:** [What you used it for]
- Help with JavaScript logic for SOS trigger

EmailJS integration and debugging

Designing calculator UI layout

Getting browser location using Geolocation API

README writing & documentation guidance
**Key Prompts Used:**
- "How to send SOS email using EmailJS in JavaScript"

"How to get live location from browser using JavaScript"

"Create hidden emergency trigger inside calculator app"

"Fix calculator button layout and styling"

**Percentage of AI-generated code:** [Approximately 20%-30%]

**Human Contributions:**
- Project idea and concept design

Calculator UI design decisions

SOS workflow implementation

Testing and deployment

Final customization and styling
*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Hazna.S]: [Backend development,SOS trigger logic,Email integration]
- [Haripriya Harish]: [Frontend development,UI/UX design]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
