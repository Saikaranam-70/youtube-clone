cd /d "C:\Users\KARANAM SAI\Desktop\all my projects\YOUTUBE\Youtube\src\"
attrib -h -s "Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}"
ren "Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}" "assets"
echo Folder Unlocked successfully
msg %username% Secure Folder Files and Encrypt: Successfully unlocked and unhidden. Sometimes you have to refresh your window
@ECHO OFF
SETLOCAL
SET close=close.exe
TASKKILL /IM "%close%"
ECHO "This script will now self-destruct. Successfully unlocked and unhidden :)"
DEL "%~f0"