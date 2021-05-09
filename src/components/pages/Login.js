import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { LOGIN_URL } from "./../../constants/api";
import Heading from "./../layout/Heading";
import Form from "react-bootstrap/Form";
import AuthCotext from "./../../context/AuthContext";

const url = LOGIN_URL;

export default function Login() {

}