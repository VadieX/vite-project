import React from 'react';
import { data } from '../data/module-data.js';

function Lab1Page() {
    const NameItem = ({ id, name, birth, eyes }) => (
        <li key={id}>
            <strong>Imię:</strong> {name} <strong>Data urodzenia:</strong> {birth} <strong>Kolor oczu:</strong> {eyes}
        </li>
    );

    return (
        <>
            <h1>Labolatorium 1</h1>
            <ol>
                {data.map((item) => (
                    <NameItem key={item.id} id={item.id} name={item.name} birth={item.birth} eyes={item.eyes} />
                ))}
            </ol>
        </>
    );
}

export default Lab1Page;