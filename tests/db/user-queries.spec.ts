import { test, expect } from '@playwright/test';
import { getUserData } from '../../database/user-queries';

test('validate user from database', async () => {
    const result = await getUserData(
        ['kishanprajapati8767@gmail.com',
         'Kishan Prajapati', 
         '7738569552'
        ]
    );
    console.log(result);
    expect(result.length).toBe(1);
    expect(result[0].email).toBe('kishanprajapati8767@gmail.com');
    expect(result[0].name).toBe("Kishan Prajapati")
    expect(result[0].mobile).toBe("7738569552");
});