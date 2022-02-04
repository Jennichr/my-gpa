import SubjectData from './data/cs-2019.json';

const getSubject = SubjectData.curriculum.subjects.map(v => {
    let k = v.subjects.map(u => u.code + ' ' + u.name)
    return k
})

export const subjects = getSubject.flat().map(opt => ({ label: opt, value: opt }));