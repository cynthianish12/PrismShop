import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTbVerifyUser1720110478961 implements MigrationInterface {
    name = 'AddTbVerifyUser1720110478961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "verify" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "verificationToken" character varying, "isVerified" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_c554da021aecbe3860c4b631be5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "verify"`);
    }

}
