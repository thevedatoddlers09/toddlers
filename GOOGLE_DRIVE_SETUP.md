# Google Drive Integration for Careers Page

## Environment Variables Required

Add these to your `.env.local` file:

```env
# Google Drive API Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_DRIVE_FOLDER_ID=your-google-drive-folder-id
```

## How to Get These Values

### 1. GOOGLE_SERVICE_ACCOUNT_EMAIL
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create/select a project
- Go to **APIs & Services > Credentials**
- Create **Service Account**
- Copy the service account email

### 2. GOOGLE_PRIVATE_KEY
- In the service account, go to **Keys** tab
- Click **Add Key > Create New Key > JSON**
- Download the JSON file
- Copy the `private_key` value (including the \n characters)

### 3. GOOGLE_DRIVE_FOLDER_ID
- Go to Google Drive
- Create a folder for resumes (e.g., "Career Applications")
- Open the folder
- Copy the ID from the URL: `drive.google.com/drive/folders/YOUR_FOLDER_ID`
- **IMPORTANT**: Share this folder with your service account email!

## Testing Without Google Drive

The API will work even without Google Drive configured:
- Applications will be logged to the server console
- Users will still see a success message
- You can set up Google Drive later
