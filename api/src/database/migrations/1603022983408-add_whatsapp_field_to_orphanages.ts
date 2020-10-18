import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addWhatsappFieldToOrphanages1603022983408 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'orphanages',
        new TableColumn({
          name: 'whatsapp',
          type: 'varchar',
          isNullable: true,
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('orphanages', 'whatsapp');
    }

}
