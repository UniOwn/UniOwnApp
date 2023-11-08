import { parseEnvVariable } from "@/utils/parse-env-variable";

const environment = {
    backendUrl: parseEnvVariable(process.env.UNIOWN_BACKEND_URL)
};

export default environment;
