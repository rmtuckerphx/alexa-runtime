export enum Storage {
  ALEXA_PERMISSIONS = 'alexa_permissions',
  OUTPUT = 'output',
  SESSIONS = 'sessions',
  REPEAT = 'repeat',
  LOCALE = 'locale',
  USER = 'user',
}

export enum Turn {
  AUDIO = 'play',
  PERMISSION_CARD = 'permission_card',
  END = 'end',
  PREVIOUS_OUTPUT = 'lastOutput',
}

export default {
  Storage,
  Turn,
};