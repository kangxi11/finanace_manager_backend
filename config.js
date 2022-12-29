require('dotenv').config();

module.exports = {
    aws_table_name: 'finance_manager_transactions',
    aws_local_config: {
      //Provide details for local configuration
    },
    aws_remote_config: {
      accessKeyId: process.env.DYNAMO_KEY,
      secretAccessKey: process.env.DYNAMO_SECRET,
      region: process.env.DYNAMO_REGION,
    }
};