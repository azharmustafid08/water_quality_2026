// Isi API_URL dengan URL Web App Apps Script (berakhiran /exec).
window.DASHBOARD_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfycbzt80ArSyUNgcabcx9YXZiOTlIwnFqPhNkvlsmy6br3_udhidLpW9U4U20OmEXxS1A/exec",
  // Zona waktu Pi (WITA = +08:00). Timestamp di Sheet ditulis dalam waktu lokal Pi.
  TZ_OFFSET: "+08:00",
  // Interval kirim Pi (detik); dipakai untuk menentukan status Online/Offline.
  SEND_INTERVAL: 60,
  REFRESH_SECONDS: 60
};
