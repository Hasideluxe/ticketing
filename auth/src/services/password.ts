import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class Password {
  static async toHash(passowrd: string) {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(passowrd, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  }

  static async compare(storedPassowrd: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassowrd.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buf.toString('hex') === hashedPassword;
  }
}
