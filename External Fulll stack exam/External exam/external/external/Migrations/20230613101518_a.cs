using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace external.Migrations
{
    public partial class a : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "object",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    @object = table.Column<string>(name: "object", type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    typeid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_object", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "object_type",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    type = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    parentid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_object_type", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "roles",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    role = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_roles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "products",
                columns: table => new
                {
                    pid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pname = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    photo = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    description = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    price = table.Column<int>(type: "int", nullable: true),
                    qty = table.Column<int>(type: "int", nullable: true),
                    status = table.Column<int>(type: "int", nullable: true),
                    cat = table.Column<int>(type: "int", nullable: true),
                    subcat = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__products__DD37D91AF1469F4F", x => x.pid);
                    table.ForeignKey(
                        name: "FK__products__cat__412EB0B6",
                        column: x => x.cat,
                        principalTable: "object_type",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK__products__status__403A8C7D",
                        column: x => x.status,
                        principalTable: "roles",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK__products__subcat__4222D4EF",
                        column: x => x.subcat,
                        principalTable: "object",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    passwordhash = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    passwordsalt = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    phone_no = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    role = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.id);
                    table.ForeignKey(
                        name: "FK__users__role__398D8EEE",
                        column: x => x.role,
                        principalTable: "roles",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_products_cat",
                table: "products",
                column: "cat");

            migrationBuilder.CreateIndex(
                name: "IX_products_status",
                table: "products",
                column: "status");

            migrationBuilder.CreateIndex(
                name: "IX_products_subcat",
                table: "products",
                column: "subcat");

            migrationBuilder.CreateIndex(
                name: "IX_users_role",
                table: "users",
                column: "role");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "products");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "object_type");

            migrationBuilder.DropTable(
                name: "object");

            migrationBuilder.DropTable(
                name: "roles");
        }
    }
}
