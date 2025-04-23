import 'package:flutter/material.dart';
import 'package:kheti_sutra/domain/app_routes.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LanguageSelectionPage extends StatefulWidget {
  const LanguageSelectionPage({super.key});

  @override
  State<LanguageSelectionPage> createState() => _LanguageSelectionPageState();
}

class _LanguageSelectionPageState extends State<LanguageSelectionPage> {
  String? selectedLanguage;

  List<Map<String, String>> languages = [
    {"name": "English", "code": "en", "flag": "🇺🇸"},
    {"name": "Hindi", "code": "hi", "flag": "🇮🇳"},
    {"name": "Bengali", "code": "bn", "flag": "🇧🇩"},
    {"name": "Urdu", "code": "ur", "flag": "🇵🇰"},
    {"name": "Tamil", "code": "ta", "flag": "🇮🇳"},
    {"name": "Telugu", "code": "te", "flag": "🇮🇳"},
  ];

  Future<void> _saveLanguage(String code) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('language', code);
    // ignore: use_build_context_synchronously
    Navigator.pushReplacementNamed(context, AppRoutes.on_boarding_screen);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF5F5DC),
      appBar: AppBar(
        title: const Text('Select Language'),
        backgroundColor: const Color(0xFF4CAF50),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: languages.length,
        itemBuilder: (context, index) {
          final lang = languages[index];
          return Card(
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            child: ListTile(
              leading: Text(lang['flag']!, style: const TextStyle(fontSize: 24)),
              title: Text(lang['name']!, style: const TextStyle(fontSize: 18)),
              trailing: selectedLanguage == lang['code']
                  ? const Icon(Icons.check_circle, color: Colors.green)
                  : null,
              onTap: () {
                setState(() => selectedLanguage = lang['code']);
                _saveLanguage(lang['code']!);
              },
            ),
          );
        },
      ),
    );
  }
}
