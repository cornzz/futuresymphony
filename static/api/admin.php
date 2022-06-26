<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Future Symphony Competition - Admin</title>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>
        <style>
            html,
            body {
                height: 100%;
                font-family: 'Open Sans', sans-serif;
                font-size: 0.9em;
            }
            body {
                width: 100vw;
                margin: 0 auto;
                overflow-x: hidden;
            }
            #table_wrapper {
                overflow: scroll;
                padding-bottom: 40px;
            }
            .table-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            a {
                position: relative
            }
            a:hover:after {
                content: attr(data-label);
                position: absolute;
                top: 14px;
                left: 14px;
                border-radius: 2px;
                padding: 2px;
                background-color: #ccc;
                z-index: 1000;
            }
            .link,
            .link:focus {
                text-decoration: none;
                border-bottom: 1px solid #184C85;
                color: #184C85;
                transition: all 0.1s ease;
                line-height: 18px;
            }
            .link:hover {
                text-decoration: none;
                border-bottom-color: transparent;
                color: #171E26;
                cursor: pointer;
            }
            .title {
                margin-top: 100px;
            }
        </style>
        <script>
            $(document).ready(function() {
                $('#table').DataTable({
                    columnDefs: [
                        {
                            targets: "_all",
                            className: 'dt-center'
                        }
                    ],
                    "order": [
                        [ 0, "desc" ]
                    ]
                });
                $('#table2').DataTable({
                    columnDefs: [
                        {
                            targets: "_all",
                            className: 'dt-center'
                        }
                    ],
                    "order": [
                        [ 0, "desc" ]
                    ]
                });
            });

            let orchestra = [
                { name: "firstFlute", max: 1, selected: 0 },
                { name: "secondFlute", max: 1, selected: 0 },
                { name: "firstOboe", max: 1, selected: 0 },
                { name: "secondOboe", max: 1, selected: 0 },
                { name: "firstClarinet", max: 1, selected: 0 },
                { name: "secondClarinet", max: 1, selected: 0 },
                { name: "saxophone", max: 1, selected: 0 },
                { name: "bassoon", max: 2, selected: 0 },
                { name: "frenchHorn", max: 2, selected: 0 },
                { name: "trumpet", max: 1, selected: 0 },
                { name: "trombone", max: 1, selected: 0 },
                { name: "timpani", max: 1, selected: 0 },
                { name: "percussion", max: 2, selected: 0 },
                { name: "pianoCelesta", max: 1, selected: 0 },
                { name: "harp", max: 1, selected: 0 },
                { name: "accordion", max: 1, selected: 0 },
                { name: "electricGuitar", max: 1, selected: 0 },
                { name: "femaleNarrator", max: 1, selected: 0 },
                { name: "maleNarrator", max: 1, selected: 0 },
                { name: "iViolin", max: 6, selected: 0 },
                { name: "iiViolin", max: 5, selected: 0 },
                { name: "viola", max: 4, selected: 0 },
                { name: "violoncello", max: 3, selected: 0 },
                { name: "doublebass", max: 2, selected: 0 },
            ]

            function showInstrumentation(selection) {
                let text = selection
                    .map((e, i) => `${e.filter(Boolean).length}x ${orchestra[i].name}`)
                    .filter(e => !e.startsWith('0')).join('\n')
                window.alert(text)
            }

            function showContent(target) {
                window.alert(target.dataset.content)
            }
        </script>
    </head>
    <body>
        <?php
            require_once "db_connection.php";

            return;

            $conn = OpenCon();

            $result = $conn->query("SELECT a.id, b.reg_key, b.email, b.firstName, b.lastName, b.dateOfBirth, b.country, b.pieceTitle, b.annotation, b.instrumentation, b.remarks, b.scoreConfirmations, b.billingAddress, b.referrer, b.paymentConfirmed, b.complete, b.secondRound, c.idCopyFileName, c.pieceScoreFileName, c.pieceDemoFileName, c.proofOfPaymentFileName FROM new_registrations AS a JOIN registrations AS b ON a.reg_key = b.reg_key JOIN user_files AS c ON b.reg_key = c.reg_key");
            $resultUnconfirmed = $conn->query("SELECT a.id, a.reg_key, a.email, a.firstName, a.lastName, a.dateOfBirth, a.country FROM new_registrations AS a LEFT JOIN registrations AS b ON a.reg_key = b.reg_key WHERE b.reg_key IS NULL");

            function esc($string) {
                return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
            }
        ?>
        <div class="table-wrapper">
            <h1>Registrations</h1>
            <table id="table" class="display compact" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Key</th>
                        <th>E-mail</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date of Birth</th>
                        <th>Country</th>
                        <th>ID document</th>
                        <th>Piece title</th>
                        <th>Annotation</th>
                        <th>Score</th>
                        <th>Demo file</th>
                        <th>Instrumentation</th>
                        <th>Remarks</th>
                        <th>Score confirmations</th>
                        <th>Proof of payment</th>
                        <th>Billing address</th>
                        <th>Referrer</th>
                        <th>Payment confirmed</th>
                        <th>Registration complete</th>
                        <th>Second round</th>
                    </tr>
                </thead>
            
                <tbody>
                    <?php
                        while ($row = $result->fetch_assoc()) {
                    ?>
                    <tr>
                        <td><?php echo $row["id"];?></td>
                        <td>
                            <a class="link" target="_blank" href="/registration/id?<?php echo $row["reg_key"];?>">
                                <?php echo $row["reg_key"];?>
                            </a>
                        </td>
                        <td><?php echo esc($row["email"]);?></td>
                        <td><?php echo esc($row["firstName"]);?></td>
                        <td><?php echo esc($row["lastName"]);?></td>
                        <td><?php echo esc($row["dateOfBirth"]);?></td>
                        <td><?php echo esc($row["country"]);?></td>
                        <td>
                            <?php if ($row["idCopyFileName"] !== null && $row["idCopyFileName"] !== "") {?>
                                <a
                                    class="link"
                                    target="_blank"
                                    data-label="<?php echo esc($row["idCopyFileName"]);?>"
                                    href="/api/files.php?key=<?php echo $row["reg_key"];?>&file=idCopyFile"
                                >
                                    Download
                                </a>
                            <?php }?>
                        </td>
                        <td><?php echo esc($row["pieceTitle"]);?></td>
                        <td>
                            <?php if ($row["annotation"] !== null && $row["annotation"] !== "") {?>
                                <span
                                    class="link"
                                    data-content="<?php echo esc($row["annotation"]);?>"
                                    onclick="showContent(this)"
                                >
                                    Click to see
                                </span>
                            <?php }?>
                        </td>
                        <td>
                            <?php if ($row["pieceScoreFileName"] !== null && $row["pieceScoreFileName"] !== "") {?>
                                <a
                                    class="link"
                                    target="_blank"
                                    data-label="<?php echo esc($row["pieceScoreFileName"]);?>"
                                    href="/api/files.php?key=<?php echo $row["reg_key"];?>&file=pieceScoreFile"
                                >
                                    Download
                                </a>
                            <?php }?>
                        </td>
                        <td>
                            <?php if ($row["pieceDemoFileName"] !== null && $row["pieceDemoFileName"] !== "") { ?>
                                <a
                                    class="link"
                                    target="_blank"
                                    data-label="<?php echo esc($row["pieceDemoFileName"]); ?>"
                                    href="/api/files.php?key=<?php echo $row["reg_key"];?>&file=pieceDemoFile"
                                >
                                    Download
                                </a>
                            <?php }?>
                        </td>
                        <td>
                            <?php if ($row["instrumentation"] !== null) {?>
                                <span class="link" onclick="showInstrumentation(<?php echo $row['instrumentation'];?>)">
                                    Click to see
                                </span>
                            <?php }?>
                        </td>
                        <td>
                            <?php if ($row["remarks"] !== null && $row["remarks"] !== "") { ?>
                                <span
                                    class="link"
                                    data-content="<?php echo esc($row["remarks"]);?>"
                                    onclick="showContent(this)"
                                >
                                    Click to see
                                </span>
                            <?php }?>
                        </td>
                        <td><?php echo $row["scoreConfirmations"];?></td>
                        <td>
                            <?php if ($row["proofOfPaymentFileName"] !== null && $row["proofOfPaymentFileName"] !== "") { ?>
                                <a
                                    class="link"
                                    target="_blank"
                                    data-label="<?php echo esc($row["proofOfPaymentFileName"]); ?>"
                                    href="/api/files.php?key=<?php echo $row["reg_key"];?>&file=proofOfPaymentFile"
                                >
                                    Download
                                </a>
                            <?php }?>
                        </td>
                        <td><?php echo $row["billingAddress"];?></td>
                        <td><?php echo $row["referrer"];?></td>
                        <td><?php echo $row["paymentConfirmed"];?></td>
                        <td><?php echo $row["complete"];?></td>
                        <td><?php echo $row["secondRound"];?></td>
                    </tr>
                    <?php
                        }
                    ?>
                </tbody>
            </table>

            <h1 class="title">Unconfirmed Registrations</h1>
            <table id="table2" class="display compact" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Key</th>
                        <th>E-mail</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date of Birth</th>
                        <th>Country</th>
                    </tr>
                </thead>

                <tbody>
                    <?php
                        while ($row = $resultUnconfirmed->fetch_assoc()) {
                    ?>
                        <tr class="unconfirmed">
                            <td><?php echo $row["id"];?></td>
                            <td><?php echo $row["reg_key"];?></td>
                            <td><?php echo esc($row["email"]);?></td>
                            <td><?php echo esc($row["firstName"]);?></td>
                            <td><?php echo esc($row["lastName"]);?></td>
                            <td><?php echo esc($row["dateOfBirth"]);?></td>
                            <td><?php echo esc($row["country"]);?></td>
                        </tr>
                    <?php
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </body>
</html>
