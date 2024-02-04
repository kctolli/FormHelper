import React, { memo, useRef, useEffect, useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha'; // React component for Google reCAPTCHA v2.

import FormComponents from './FormComponents';
import FormService from './FormService';

// Exports 
export default {
    // Dependencies
    React,
    axios,
    ReCAPTCHA,
    // Hooks
    memo,
    useRef,
    useEffect,
    useState,
    // Custom Helpers
    FormComponents,
    FormService
};
