function GradeValue(e) {
    switch (e) {
        case 'A':
            return 4;
        case 'A-':
            return 3.75;
        case 'B+':
            return 3.25;
        case 'B':
            return 3;
        case 'B-':
            return 2.75;
        case 'C+':
            return 2.25;
        case 'C':
            return 2;
        case 'C-':
            return 1.75;
        case 'D':
            return 1;
        case 'F':
            return 0;

        default:
            console.log('error')
            break;
    }
}

export default GradeValue