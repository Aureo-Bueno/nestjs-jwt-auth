import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 0,
            name: 'Aureo',
            email: 'aureo@gmail.com',
            password: 'aureopass',
        },
        {
            id: 1,
            name: 'Bueno',
            email: 'bueno@gmail.com',
            password: 'buenopass',
        },
    ];

    findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find((user: User) => user.email === email);
        if (user) {
            return Promise.resolve(user);

        }
        return undefined;
    }

    findOne(id: number): Promise<User | undefined> {
        const user = this.users.find((user: User) => user.id === id);
        if (user) {
            return Promise.resolve(user);
        }
        return undefined;
    }
}
