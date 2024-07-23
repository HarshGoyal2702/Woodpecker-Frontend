import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Hero from '../components/Hero';

export default function LandingPage() {
  return (
    <div>
      <Hero />
    </div>
  );
}
