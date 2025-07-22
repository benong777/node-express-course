const { writeFile } = require('fs');

writeFile(
    './temporary/output.txt',
    'This is line 1\n',
    (err, result) => {
        if (err) {
            console.log('Error while writing 1st line!', err);
            return;
        } 
        const first = result;   // Store 1st result
        console.log('Write to 1st line - Done')

        writeFile(
            './temporary/output.txt',
            'This is line 2\n',
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log('Error while writing 2nd line!', err);
                    return;
                } 
                const second = result;   // Store 2nd result
                console.log('Write to 2nd line - Done')

                writeFile(
                    './temporary/output.txt',
                    'This is line 3\n',
                    { flag: 'a' },
                    (err, result) => {
                        if (err) {
                            console.log('Error while writing 3rd line!', err);
                            return;
                        } 
                        const third = result;   // Store 3rd result
                        console.log('Write to 3rd line - Done')
                    }
                );
            }
        );
    }
);