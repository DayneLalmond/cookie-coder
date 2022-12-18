import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer className="w-200 bg-secondary p-4">
            <div className="container text-center mb-6">
                <Link to="/">github link</Link>
            </div>
        </footer>
    )
};
