export function saveToken(token: string) {
  const date = new Date();
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);

  const expires = "expires=" + date.toUTCString();
  document.cookie =
    "token=" + token + ";" + expires + ";path=/";
}

export function loadToken(): string {
  const cookieItems = document.cookie.split('; ');
  const cookieToken = cookieItems.find(cookieItem => cookieItem.startsWith('token='));
  if (cookieToken) {
    return cookieToken.slice(cookieToken.indexOf('=') + 1);
  }

  return '';
}