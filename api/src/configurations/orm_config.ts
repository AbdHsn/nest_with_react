import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const OrmConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'iexpressdb.csxgkcrblbcs.ap-southeast-1.rds.amazonaws.com',
  port: 3306,
  username: 'iexpressdb',
  password: '$O181905021o',
  database: 'iexpressdb',
  entities: [
    'src/models/entity_models/*.ts',
    'dist/src/models/entity_models/*.ts',
  ],
  synchronize: false,
};

export default OrmConfig;
