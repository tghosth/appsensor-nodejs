
function LocalEnv()
{
    if (process.env.NODE_ENV !== 'production') 
    {
        require('dotenv').load();
    }

    return process.env;
}

module.exports.LocalEnv = LocalEnv;