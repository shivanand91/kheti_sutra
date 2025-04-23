import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:kheti_sutra/domain/app_routes.dart';

class OtpPage extends StatelessWidget {
  const OtpPage({super.key});

  @override
  Widget build(BuildContext context) {
    final TextEditingController otpController = TextEditingController();

    return Scaffold(
      backgroundColor: const Color(0xFFF5F5DC),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const SizedBox(height: 60),
              const Icon(Icons.lock, size: 60, color: Color(0xFF4CAF50)),
              const SizedBox(height: 20),
              Text(
                "Enter OTP",
                style: GoogleFonts.poppins(
                  fontSize: 24,
                  fontWeight: FontWeight.w600,
                  color: const Color(0xFF4CAF50),
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                "We've sent a 4-digit code to your phone number.",
                style: TextStyle(color: Colors.black54),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 40),

              // 🔢 OTP input
              TextField(
                controller: otpController,
                keyboardType: TextInputType.number,
                maxLength: 4,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 20, letterSpacing: 12),
                decoration: InputDecoration(
                  counterText: "",
                  hintText: "____",
                  filled: true,
                  fillColor: Colors.white,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(14),
                    borderSide: BorderSide.none,
                  ),
                ),
              ),
              const SizedBox(height: 20),

              ElevatedButton(
                onPressed: () {
                  if (otpController.text.length == 4) {
                    // Handle OTP verification logic here
                    Navigator.pushReplacementNamed(context, AppRoutes.select_language); // or validate OTP
                  }
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF4CAF50),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14),
                  ),
                  minimumSize: const Size(double.infinity, 50),
                ),
                child: const Text("Verify OTP"),
              ),
              const SizedBox(height: 20),

              TextButton(
                onPressed: () {
                  // Resend OTP logic
                },
                child: const Text("Resend OTP", style: TextStyle(color: Color(0xFF009688))),
              )
            ],
          ),
        ),
      ),
    );
  }
}
