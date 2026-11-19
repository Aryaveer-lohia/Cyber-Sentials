@echo off
title Cyber Sentinels Local Server
cd /d "%~dp0"
echo ===================================================
echo           CYBER SENTINELS LOCAL SERVER
echo ===================================================
echo.
echo Starting local web server on port 8000...
echo.
echo Once started, open your web browser at:
echo    http://localhost:8000
echo.
echo Press Ctrl+C at any time in this window to stop.
echo ===================================================
echo.
python server.py
if errorlevel 1 (
    echo.
    echo Python server stopped or Python was not found.
    echo Falling back to direct browser launch...
    start index.html
)
pause
