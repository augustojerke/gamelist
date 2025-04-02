export async function getCompaniesById(ids: number[]) {
  if (ids.length === 0) return null;

  let bodyParams = `
      fields company;
      where id = (${ids.join(",")});
      limit 500;
    `;

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/igdb/getInvolvedCompanies",
    {
      method: "POST",
      body: bodyParams,
    }
  );

  const involved: any = await response.json();

  bodyParams = `
      fields name;
      where id = (${involved
        .map((company: any) => company.company)
        .join(", ")});
      limit 500;
    `;

  const responseCompany = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/igdb/getCompanies",
    {
      method: "POST",
      body: bodyParams,
    }
  );

  return responseCompany.json();
}
