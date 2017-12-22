import {fetchJson} from 'utils';

const fetchDetails = repoList =>
    Promise.all(repoList.map(repo => fetchRepoDetails(repo)))
        .then(repos => repos.filter(repo => !!repo));

const fetchRepoDetails = repo => !repo.fork
    ? fetchReadme(repo)
    : Promise.all([fetchReadme(repo), fetchParent(repo)])
        .then(responses => responses.reduce((all, next) => ({
            ...all,
            ...next
        })));

const fetchParent = repo => fetchJson('https://api.github.com/repos/pruski/' + repo.name)
    .then(response => ({
        parent: {
            name: response.parent.full_name,
            url: response.parent.html_url
        }
    }));

const fetchReadme = repo => fetchJson('https://api.github.com/repos/'+ repo.full_name +'/readme')
    .then(readme => ({
        ...formatRepoDetails(repo),
        readme: atob(readme.content)
    }));

const formatRepoDetails = repo => {
    return {
        id: repo.name,
        name: repo.name.replace(/-/g, ' '),
        url: repo.html_url,
        updated: repo.updated_at
    }
};

export const fetchReposFromGithub = async () => await fetchDetails(await fetchJson('https://api.github.com/users/pruski/repos'));