@echo off & setlocal

cd /d "C:\xampp\htdocs\whatsapps\w3nder\frontend\"
title <nul & title ..\%~nx0
%:^)
set "_input=" & cls & echo/
echo/ Here are your command options: 
echo/ & type "%~f0"|findstr /b .Option 
for /f %%i in ('echo\prompt;$h^|cmd')do set "_bs=%%~i"

set /p "_opts= %_bs% O que voce quer fazer?" || goto %:^)
echo=%_opts%|2>nul findstr /be [1-7] >nul || goto %:^)

for /f ^usebackq^tokens^=2^delims^=^= %%i in (`^<con: ^<nul ^
type "%~dpnx0"^|findstr /b .Option.%_opts%`)do <con: call %%~i

endlocal && goto :eof

 Option 1 = cmd /c "yarn start"
 ::Option 2 = cmd /c "npm i whatsapp-web.js"
 ::Option 3 = cd /d "changefolder"
 ::Option 5 = start "" "www.apple.com"
 ::Option 6 = start "" "www.google.com"
 ::Option 7 = cmd /c "call another.bat"