# Dynamic Input Fields
  This React project implements dynamic input fields with functionalities for adding, editing, saving, and deleting fields. It also includes localStorage support to persist data and styled pop-up notifications for success and error cases.

# How It Works

1. Dynamic Rows:

  * Each input row consists of an "Item" and "Description" field with Save and Delete buttons.

  * Rows are dynamically managed through React state.

2. Save Functionality:

  * Validates that fields are not empty before saving.

  * Updates localStorage with the latest saved fields.

3. Delete Functionality:

  * Removes the specific row from the UI and localStorage.

4. Submit Button:

  * Verifies all fields are saved before submission.

  * Displays a success notification for complete data submission.

5. Notifications:

  * Styled pop-ups display animated success/error messages.
# Website Look like..
![Screenshot 2024-11-30 211922](https://github.com/user-attachments/assets/348959c2-fba6-4adf-a7fc-1da2d6799d23)

# Installation and Implementation
  * Node.js installed on your machine
  * npm for package management
Steps to Install and Run
1. Clone the Repository:
   * git clone https://github.com/Poojanpatel2003/Dynamic_inputField.git
   * cd {folder Name}

2. Install Dependencies:
    npm or bun install

3. Start the Development Server:
    npm or bun dev
   
# How to Use

1. Open the application in your browser.

2. Click the "+" button to add a new dynamic input row.

3. Fill in the Item and Description fields.

4. Click the Save button to store the data in localStorage.

5. Delete unwanted rows using the Trash icon.

6. Ensure all fields are saved, then click Submit to finalize.



  
