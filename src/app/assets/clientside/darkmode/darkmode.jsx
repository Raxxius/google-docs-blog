'use client';

export default function DarkMode() {
    console.log("Darkmode activated")
    console.log(window.localStorage.getItem('color-mode'))

    return true
}