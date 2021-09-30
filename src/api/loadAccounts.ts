export const loadAccounts = async () => {
  const response = await fetch('https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data', {
    method: 'GET',
    headers: {
      'x-api-key': 'ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59',
    },
  });

  if (!response.ok) {
    return Promise.reject(new Error('Error'));
  }

  const result = await response.json();

  return result.body.accounts;
};
