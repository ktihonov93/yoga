import React from 'react';
import './Header.css';

export default function Header() {
        return (
            <header className="header">
                <svg
                    className="header__menu"
                    width="30"
                    height="13"
                    viewBox="0 0 30 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0.5H30M0 6.49948H30M0 12.5003H19.5" stroke="#8E80A9" />
                </svg>
                <span className="header__number" aria-label="number to call"
                >8 (812) 690-10-10</span>
            </header>
        );
}

