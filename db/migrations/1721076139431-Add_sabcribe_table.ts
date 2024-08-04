import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSabcribeTable1721076139431 implements MigrationInterface {
    name = 'AddSabcribeTable1721076139431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subscribe" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "subscribedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3e91e772184cd3feb30688ef1b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isVerified"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isVerified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`DROP TABLE "subscribe"`);
    }

}
