import 'package:flutter/material.dart';
import 'package:kheti_sutra/ui/login/login_page.dart';
import 'package:kheti_sutra/ui/onBoarding/on_boarding_page.dart';
import 'package:kheti_sutra/ui/otp/otp_page.dart';
import 'package:kheti_sutra/ui/selectLanguage/select_language.dart';
import 'package:kheti_sutra/ui/splash/splash_page.dart';

class AppRoutes{
  static const String splash_screen = "/";
  static const String on_boarding_screen = "/onBoarding";
  static const String login_screen = "/login";
  static const String otp_screen = "/otp";
  static const String select_language = "/selectLanguage";

  static Map<String, Widget Function(BuildContext)> getRoutes() => {
    splash_screen: (context) => const SplashScreen(),
    on_boarding_screen: (context) => const OnBoardingPage(),
    login_screen: (context) => const LoginPage(),
    otp_screen: (context) => OtpPage(),
    select_language: (context) => const LanguageSelectionPage(),

  };
}