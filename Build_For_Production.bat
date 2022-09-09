set PATH=%USERPROFILE%\bin\Sencha\Cmd\7.5.1.20;%PATH%
sencha app build -uses

::Check if sencha app failed to build, the command prompt will stop and not close the window if error occurred
CALL :CHECK_FAIL

:: ======== FN ======
GOTO :EOF

:CHECK_FAIL
@echo off
if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)