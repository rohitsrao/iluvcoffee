import {MigrationInterface, QueryRunner} from "typeorm";

export class schmeSync1652352519242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `ALTER TABLE "coffee" ADD "description" character varying`,
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `ALTER TABLE "coffee" DROP COLUMN "description"`,
      );
    }
}
